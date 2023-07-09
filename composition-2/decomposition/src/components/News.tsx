/**
 * 
 * @returns Новости
 */

import { New } from "./New"

export const News = () => {
    const news = ['новость1', 'новость2', 'новость3']
  return (
    <div>
        <div className="flex">
            <h2>Сейчас в СМИ</h2>
            <h2>В Германии</h2>
            <h2>Рекомендуем</h2>
        </div>
        <div>
            {news.map((i) => (<New key={i}>{i}</New>))}
        </div>
    </div>
  )
}
