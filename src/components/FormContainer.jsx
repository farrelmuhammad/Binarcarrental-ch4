import React from 'react';
import './FormContainer.css';
import {Link} from 'react-router-dom'

function FormContainer() {
  return (
    <section className="form-container">
            <form action="">
                <div className="input-box">
                    <span>Tipe Driver</span>
                    <select name="languages" id="lang">
                        <option value="Dengan Sopir">JavaScript</option>
                        <option value="Tanpa Sopir">Tanpa Sopir</option>
                    </select>
                </div>
                <div className="input-box">
                    <span>Tanggal</span>
                    <input type="date" name="" id=""/>
                </div>
                <div className="input-box">
                    <span>Waktu Jemput/Ambil</span>
                    <input type="time" name="" id=""/>
                </div>
                <div className="input-box">
                    <span>Jumlah Penumpang</span>
                    <input type="number" name="" id=""/>
                </div>
                <Link to="/cars">
                    <input type="submit" name="" id="" className="btn"/>
                </Link>
            </form>
        </section>
  )
}

export default FormContainer;