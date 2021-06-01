import React/*, {useState}*/ from 'react';
import {KeranjangContainer, KeranjangH1, KeranjangH2, KeranjangItem, KeranjangWrapper, KeranjangTabel, KeranjangFoto, KeranjangNama, KeranjangBanyak, KeranjangHarga, KeranjangHapus, KeranjangHapusLink} from './KeranjangElements';
import {DataBarang} from '../ListBarang/DataBarang.js'


const KeranjangSection = () => {
    return (
        <KeranjangContainer id="home">
            <KeranjangH1>Keranjang</KeranjangH1>
            <KeranjangItem>
                {DataBarang.map((data) => {
                    return(
                        <KeranjangWrapper>
                            <KeranjangTabel>
                                <KeranjangFoto src={data.foto}/>
                                <KeranjangNama>{data.nama}</KeranjangNama>
                                <KeranjangBanyak>{data.sisa}</KeranjangBanyak>
                                <KeranjangHarga>{data.harga}</KeranjangHarga>
                                <KeranjangHapus>
                                    <KeranjangHapusLink to='/keranjang'>HAPUS</KeranjangHapusLink>
                                </KeranjangHapus>
                            </KeranjangTabel>
                        </KeranjangWrapper>
                    )
                })}
                <KeranjangH2>Total Harga : Rp. 10.000.000</KeranjangH2>
            </KeranjangItem>
        </KeranjangContainer>
    )
}

export default KeranjangSection
