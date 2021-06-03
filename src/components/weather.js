import React from 'react';

const Weather = (props) => (
    <div className='infoWeath'>
        {props.city &&
        <div>
            <p>Город: {props.city}, {props.country}</p>
            <p>Температура: {props.temp}</p>
            <p>Давление: {props.pressure} мм рт.ст.</p>
            <p>Закат: {props.sunset}</p>
        </div>
        }
        <p className='error'>{props.error}</p>
    </div>
);

export default Weather;