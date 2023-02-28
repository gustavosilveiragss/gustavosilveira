import { Blob } from "react-blob";

const BlobFilled = ({ style, props }) => {
    return (
        // <div className="blob-filled scale-50 -z-10">
        //     <svg id="blob-filled" viewBox="0 0 900 900" width="900" height="900" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
        //         <g transform="translate(481.1512721982124 494.41807002026303)">
        //             <path id="blob1" d="M217 -321.7C278.8 -253.8 324.9 -187.1 347.7 -113.7C370.6 -40.3 370.3 40 363.6 135.9C356.9 231.8 343.7 343.5 282.1 382C220.4 420.6 110.2 386.1 19.7 358.9C-70.7 331.7 -141.5 311.9 -201.7 272.9C-261.9 233.8 -311.7 175.6 -354.9 101.4C-398.2 27.2 -434.9 -63 -429.3 -157.7C-423.6 -252.4 -375.5 -351.5 -296.9 -414C-218.3 -476.4 -109.1 -502.2 -15.8 -480.5C77.6 -458.8 155.2 -389.6 217 -321.7" fill="#BB004B"></path>
        //         </g>
        //         <g transform="translate(449.1538839719833 439.68450000453345)" style={{ visibility: "hidden" }}>
        //             <path id="blob2" d="M297.2 -382.2C380.4 -348.6 439.8 -255.4 430.9 -167.3C422 -79.2 344.8 3.9 316.7 106.7C288.5 209.6 309.6 332.4 265 384.2C220.4 436 110.2 417 7.5 406.7C-95.2 396.4 -190.4 394.8 -267 353.3C-343.6 311.9 -401.5 230.6 -421.7 143C-441.9 55.4 -424.5 -38.4 -381.6 -109.7C-338.8 -180.9 -270.5 -229.6 -202.6 -268.2C-134.8 -306.9 -67.4 -335.4 19.8 -362.7C107 -389.9 214 -415.8 297.2 -382.2" fill="#BB004B"></path>
        //         </g>
        //     </svg>
        // </div>
        <Blob size="100vh"
            style={{
                position: 'absolute',
                top: '-15%',
                right: '-15%',
                zIndex: -1,
                backgroundColor: '#21D4FD',
                color: 'white',
                opacity: 0.05,
                fontSize: '50vh',
                ...style
            }}
            {...props}
        />
    );
}

export default BlobFilled;