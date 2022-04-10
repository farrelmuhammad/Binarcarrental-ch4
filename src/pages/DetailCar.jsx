import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import './DetailCar.css'

function DetailCar() {
    const [car, setCar] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://rent-cars-api.herokuapp.com/customer/car/${id}`)
            .then(response => {
                setCar(response.data)
            })
    }, [])

    if (car) {
        return (
            <>
                <div className="cars-hero">
                    <div className="form-wrapper">
                        <FormContainer />
                    </div>
                </div>
                <div className="container details">
                    <div className="left-side">
                        <h5 className="fw-bold">Tentang Paket</h5>
                        <h6>Include</h6>
                        <ul>
                            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam </li>
                            <li>Sudah termasuk bensin selama 12 jam</li>
                            <li>Sudah termasuk Tiket Wisata</li>
                            <li>Sudah termasuk pajak</li>
                        </ul>
                        <h6>Exclude</h6>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                        <h5 className="fw-bold">Refund, Reschedule, Overtime</h5>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                    </div>
                    <div className="right-side">
                        <img src={car.image} alt="" />
                        <h6 className="fw-bold mt-3">{car.name}/{car.category}</h6>
                        <ul>
                            <li><i className="fa-solid fa-user-group"></i>4 Orang</li>
                            <li><i className="fa-solid fa-gear"></i>Manual</li>
                            <li><i className="fa-regular fa-calendar"></i>Tahun 2020</li>
                        </ul>
                        <div className="d-flex justify-content-between">
                            <p>Total</p>
                            <p className="fw-bold">Rp {car.price}</p>
                        </div>
                        <button className="btn btn-success w-100 text-center text-white fw-bold">
                            Lanjutkan Pembayaran
                        </button>
                    </div>
                    <button className="btn btn-success w-100 text-center text-white fw-bold">
                            Lanjutkan Pembayaran
                    </button>
                </div>
            </>
        )
    }
    
}

export default DetailCar