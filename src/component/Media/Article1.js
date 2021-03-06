import React from 'react';
import { Media, Button } from 'reactstrap';
import './Article1.css';
import calculator from '../Image/Calculator.jpg'
import patal from '../Image/logo.png'
import Fade from 'react-reveal/Fade'
import Dicoding from '../Image/dicoding.png'
import VB from '../Image/VB.png'
import Udemy from '../Image/udemy.png'
import covit from '../Image/covit.jpg'
import paper from '../Image/paper.png'

const Article1 = () => {
    return (
        <div title="Section 1" id="section1">
            <Fade>
            <Media>
                <Media left top href="https://taufik230301.github.io/">
                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" src={calculator} />
                </Media>
                <Media body>
                    <Media heading>
                        Project membuat Aplikasi Kalkulator
          </Media>
          Sebelum masuk ke dunia software developer, khususnya website frontend saya mempelajari hal dasar yang harus dipahami yaitu HTML, CSS dan Javascript, hal tersebut adalah fundamental bagi yang ingin terjun kedunia Web Front-End Developer.
          <br/>
          <Button color="primary" href="https://github.com/taufik230301/taufik230301.github.io">View Code</Button>
        </Media>
            </Media>
            <Media className="mt-1">
                <Media left middle href="https://palembangdigital.org/">
                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" src={patal} />
                </Media>
                <Media body>
                    <Media heading>
                        Website Komunitas Palembang Digital
          </Media>
            Komunitas Palembang Digital merupakan tempat berkumpul para penggiat IT dari seluruh kalangan mulai dari siswa, mahasiswa, hingga Pekerja untuk menbangun ekosistem IT di daerah Sumatera Selatan.
            <br/>
          <Button color="primary">View Code</Button>
                </Media>
            </Media>
            <Media className="mt-1">
                <Media left middle href="#">
                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" src={patal} />
                </Media>
                <Media body>
                    <Media heading>
                        Mock Up Aplikasi PACAK IT Komunitas Palembang Digital
          </Media>
            Hasil karya mengikuti lomba hackaton pada HUT RI Ke - 75 yang diselengarakan Komunitas Palembang Digital.
            <br/>
          <Button color="primary">View Source</Button>
                </Media>
            </Media>
            <Media className="mt-1">
                <Media left middle href="https://taufiiqulhakim.netlify.app/index.html">
                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" src={Dicoding} />
                </Media>
                <Media body>
                    <Media heading>
                       Tugas Akhir Dasar - dasar pemrograman Web Dicoding
          </Media>
            Mengimplementasikan penerapan dasar - dasar pembuatan web site, dan membuat project web portfolio menggunakan HTML, CSS dan Javascript.
            <br/>
          <Button color="primary" href="https://github.com/taufik230301/Website-Taufik">View Code</Button>
                </Media>
            </Media>
            <Media className="mt-1">
                <Media left middle href="">
                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" src={VB} />
                </Media>
                <Media body>
                    <Media heading>
                       Membuat Program Akar Persamaan Non-Linear dengan pengaplikasian metode Tabel menggunakan "Visual Basic Excel 2010"
          </Media>
            Kolaborasi membangun program Akar Persamaan Non-Linear dengan pengaplikasian metode Tabel menggunakan "Visual Basic Excel 2010", untuk memenuhi tugas kuliah FKIP MTK.
            <br/>
          <Button color="primary" href="https://www.youtube.com/watch?v=Qnqyp3sSrhc&t=483s">View Program</Button>
                </Media>
            </Media>
            <Media className="mt-1">
                <Media left middle href="">
                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" src={Udemy} />
                </Media>
                <Media body>
                    <Media heading>
                       Latihan Online Course Udemy dengan Membuat Weather Apps
          </Media>
          Implementasi dengan dasar - dasar bahasa pemrograman Dart dan implementasi Penggunaan API.
            <br/>
          <Button color="primary" href="https://github.com/taufik230301/Weather_Apps">View Source Code</Button>
                </Media>
            </Media>
            <Media className="mt-1">
                <Media left middle href="">
                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" src={covit} />
                </Media>
                <Media body>
                    <Media heading>
                       Juara 3 Lomba Web Developer Cov-IT
          </Media>
          Berpartisipasi dalam acara Colaboration of IT yang diselenggarakan oleh HMJ Teknik Komputer Polsri, HMJ Manajemen Informatika Polsri dan BEM Polsri.
            <br/>
        Website Covid Tracker ini merupakan Web Informasi data covid dari bebagai belahan dunia, data tersebut diambil dari API yang telah disediakan
          <Button color="primary" href="https://github.com/taufik230301/covid-data-tracker">View Source Code</Button>
                </Media>
            </Media>
            <Media className="mt-1">
                <Media left middle href="">
                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" src={paper} />
                </Media>
                <Media body>
                    <Media heading>
                       Aplikasi E-Paper menggunakan Web API
          </Media>
          Aplikasi ini menggunakan teknologi framework flutter dan bahasa pemrograman dart, dan merupakan project magang di PT Citra Bumi Sumatera Sumatera Ekspress.
            <br/>
          <Button color="primary" href="https://github.com/SumeksApp/App">View Source Code</Button>
                </Media>
            </Media>
            </Fade>
        </div>
    );
};

export default Article1;