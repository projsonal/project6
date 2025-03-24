
import React from 'react';
import MatrixCanvas from '../components/MatrixCanvas';

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-white px-4 text-center overflow-hidden bg-black">
      <MatrixCanvas />
      <div className="z-10 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="block">School of Vocation:</span>
          <span className="block">Applied Bachelor Program</span>
          <span className="block">of Informatics Engineering</span>
        </h1>
        <p className="mt-6 text-sm sm:text-base text-red-500">
          Program Studi dengan Jumlah Citasi Karya Tulis mahasiswa dan dosen paling banyak Ter-Index Scopus dan Google Scholar, HAKI dan Buku Ber-ISBN di Institusi ULBI. Program Pengembangan Talenta Informatika Berbasis Inkubasi IRC (Informatics Research Center). Banyak Mendapatkan Predikat Juara Diberbagai Kompetisi Nasional
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-70 z-0" />
    </section>
  );
}
