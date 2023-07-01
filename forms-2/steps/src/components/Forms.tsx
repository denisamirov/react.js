import { Row } from "./Row";
import { useState } from 'react';
import {row} from '../module/module';

export const Forms = () => {
    const [date, setDate] = useState('')
    const [dist, setDist] = useState('')
    const [rowData, setRowData] = useState([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const row:row = {date, distance: parseInt(dist)}
        const existingRow = rowData.find((rw) => rw.date === row.date);

        if (existingRow) {
            existingRow.distance += row.distance;
            setRowData([...rowData]);
        } 
        
        else {
            setRowData([...rowData, row]);
        }

        setDate(' ')
        setDist(' ')
        document.getElementById('date').value = '';
        document.getElementById('steps').value = '';

      };

    const handleDateChange = (e: React.FormEvent<HTMLFormElement>) => {
        setDate(e.target.value);
      };

    const handleDistChange = (e: React.FormEvent<HTMLFormElement>) => {
        setDist(e.target.value);
    };

    const handleDeleteRow = (index) => {
        const updatedData = [...rowData];
        updatedData.splice(index, 1);
        setRowData(updatedData);
      };

    
      return (
        <>
            <form className="form" autoComplete="off" onSubmit={handleSubmit}>
                <div className="table">
                    <table className="tableHead">
                        <tbody>
                            <tr>
                                <td><label htmlFor="date">Дата(ДД.ММ.ГГ.)</label></td>
                                <td><label htmlFor="steps">Пройденно км</label></td>
                            </tr>
                            <tr>
                                <td><input type="date" id="date" name="date" onChange={handleDateChange} /></td>
                                <td><input type="steps" id="steps" name="steps" onChange={handleDistChange}/></td>
                                <td><button type="submit">Ок</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        <Row row={rowData} onDeleteRow={handleDeleteRow}/>
        </>
  )
}
