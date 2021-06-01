import React/*, {useState}*/ from 'react';
import {DetailContainer, DetailH1, DetailItem, DetailWrapper, DetailWrapper2, DetailWrapper3, DetailInput, DetailTabel, DetailTabel2, DetailTabel3, DetailTabel4, DetailFoto, DetailNama, DetailHarga, DetailStok, DetailDeskripsi, DetailDeskripsi2, DetailAddLink} from './DetailBarangElements';
import {DataBarang as data} from '../ListBarang/DataBarang.js'


const DetailSection = () => {
    return (
        <DetailContainer id="home">
            <DetailH1>Detail Barang</DetailH1>
            <DetailItem>
                <DetailWrapper>
                    <DetailFoto src={data[4].foto}/>
                    <DetailWrapper3>
                        <DetailWrapper2>
                            <DetailTabel2>
                                <DetailNama>{data[4].nama}</DetailNama>
                            </DetailTabel2>
                            <DetailTabel3>
                                <DetailHarga>{data[4].harga}</DetailHarga>
                            </DetailTabel3>
                            <DetailTabel3>
                                <DetailStok>Stok : {data[4].sisa}</DetailStok>
                            </DetailTabel3>
                        </DetailWrapper2>
                        <DetailTabel>
                            <DetailDeskripsi>Deskripsi : </DetailDeskripsi>
                            <DetailDeskripsi2>{data[4].deskripsi}</DetailDeskripsi2>
                            
                        </DetailTabel>
                        <DetailWrapper2>
                            <DetailTabel4> Banyak : 
                                <DetailInput type='text'></DetailInput>
                            </DetailTabel4>
                            <DetailAddLink to='/keranjang'>ADD TO CART</DetailAddLink>
                        </DetailWrapper2>
                    </DetailWrapper3>
                </DetailWrapper>
            </DetailItem>
        </DetailContainer>
    )
}

export default DetailSection
