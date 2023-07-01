import IconButton from '@material-ui/core/IconButton';
import {data} from '../module/module'


export const Row = (data:data, onDeleteRow) => {
  const bd = data.row.sort((a, b) => a.date.localeCompare(b.date))
  return (
    <div className="table">
      <table className='tableRow'>
        <tbody>
          <tr>
            <th>Дата(ДД.ММ.ГГ)</th>
            <th>Пройдено км</th>
            <th>Действия</th>
          </tr>
            {bd.map((row, index:number) => 
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.distance}</td>
                <td><IconButton className='DeleteButton' onClick={() => data.onDeleteRow(index)}>🞪</IconButton></td>
              </tr>)}
        </tbody>
      </table>
    </div>
  )
}
