import React/*, {useState}*/ from 'react';
import {BarangContainer, BarangH1, BarangItem, BarangWrapper, BarangTabel, BarangFoto, BarangNama, BarangHarga, BarangDetail, BarangDetailLink} from './ListBarangElements';
import {DataBarang} from './DataBarang.js'


const ListBarangSection = () => {
    return (
        <BarangContainer id="home">
            <BarangH1>List Barang</BarangH1>
            <BarangItem>
                {DataBarang.map((data) => {
                    return(
                        <BarangWrapper>
                            <BarangTabel>
                                <BarangFoto src={data.foto}/>
                                <BarangNama>{data.nama}</BarangNama>
                                <BarangHarga>{data.harga}</BarangHarga>
                                <BarangDetail>
                                    <BarangDetailLink to='data'>DETAIL</BarangDetailLink>
                                </BarangDetail>
                            </BarangTabel>
                        </BarangWrapper>
                    )
                })}
            </BarangItem>
        </BarangContainer>
    )
}

export default ListBarangSection
