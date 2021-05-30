import React/*, {useState}*/ from 'react';
import {HomeContainer, HomeContent, HomeH1, HomeP, HomeBtn, HomeBtnLink } from './HomeElements';
import Typical from 'react-typical';


const HomeSection = () => {
    /*const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }*/

    return (
        <HomeContainer id="home">
            <HomeContent>
                <HomeH1>Belanja? Di sini aja!</HomeH1>
                <HomeP>
                    Kami menjual
                    <Typical 
                        wrapper="b"
                        steps={[
                            ' pakaian',
                            1000,
                            ' mainan',
                            1000,
                            ' makanan',
                            1000,
                            ' barang elektronik',
                            1000
                        ]}
                        loop={Infinity}
                    />
                </HomeP>
                <HomeBtn>
                    <HomeBtnLink to="/buy">BELI SEKARANG</HomeBtnLink>
                </HomeBtn>
            </HomeContent>
        </HomeContainer>
    )
}

export default HomeSection
