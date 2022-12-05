import React from 'react'

export default function IconCard({ title, num, img, increased }) {

   return (
      <div className='col-12 col-md-3' style={{marginBottom: '18px'}} >

      <div className="MerchantRight_status__jN1up">
         <h5>{title} </h5>
         <div className="flex items-center MerchantRight_statusText__ZUNu4">
            {/* <img
               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9QTFRFAAAAEID/DYn/Dov/DYr/DYr/Dor/Dor/Dov/Dor/Don/DIf/Don/DYr/Dov/DYr/CIf/Dor/Dov/Doj/Don/C4r/DYv/Don/EIf/DYn/Dor/Dov/Don/EI//Dor/Dor/C4X/DYf/EIX/CIz/D4r/h78pNAAAACV0Uk5TABBQcJ+/3//vz4BAj69/YCDvz5BwML+gIK9vj98QkJ8wYDAf3/VzSswAAAPfSURBVHicrZnbeqIwEIADQiggIoKIW+3W3b7/My4zOZOEBNy56KeQ/M4xmaSErEuSHrKc0mKWjzLPqjoJTFiHHZFkCs3SfdC6+bBpXLJ0s3InP43p2Z734bpLP6RnnHy+1kM/KuQpmtcKz3W9Iwb1jUoto3DTKGm+IfWNI+8Rdv9i1nbVaiiniqnZhZRMPmNwDMmU/FwfVeKgMSqCU4ODy5XBE9rRDTE4kKHD2HiJjPfYkGBsho/I3o6b6urZ+ImM12/BgXx5iRiPaiuPEIx2adv1uUs/kC9n9rTwtNnDIwRLa5EaE9THY+fi+QTvd6YbG/vRBpkgH3P9SetQeosMMF8va7rfgUzAjVR57AQ/sNtgEDRa5hym9I4M1AWysRMqthsr2CVPXUW3gkl7zNblqG9UqCL7mDo9ODm2ZEuo2k5RRbZp/J4/Zbt4s07fcgZU4B3RhURr0kbx9HSuRVjA4oflwTFEEiqqKWBzalt8bbJEAOtZBienh1cX+KRmgs2wXFHTYsoiPorBbtt7oo9RNlPuQs1Wrq8cLIPTNVmjviQ2EOOcIDf3A08CwXbql0DebSC5oBOrwlyodWBSy9hc+etJNTbJEghOHMitMBcuHahEFVK98KY2dcC5oxkTN1BLjuVPaW9S9B4Y/icE1J385QVO4AlMx78hoF6ZbQC4eBgGVl4gY0UBdR82/wNYqGVqKt4A1oPstsV6mcgnVXpxAn8Kf1DmchLdNF9KeUfKtoxlYk/onHUg6wpQ8qo9KEeciQ38nr+W+DT1A4l7+cKwL4FsWVgrPTHKlsEFZKUHf32LQ4xoU6GGKizA0gZ+BThC9KJkywIssF1iAbG3iJCXqcu8wGKYawtIXlFEvT8Abz+I2lu4/AgPTP0YkszYfcVuB07UavVWOHbpKIGMhQTUegihON3TG9fchWz50GzG3nFHL6b2d9lDMGHxLUOd19IIXIV4yXVmuK5R8V22V6dCdTRG90kiO6/c5OEckZTPhYpz5G+XAK+7mkBUUHoeVXyvaTezHBe9fGV8UJrC7Alf8ANvHHx+FYVZ1ph8bxzN4KRoHpww+XYVCOEb11KdwZEKsdJYBoO4j9Ex4jm6P3GDjL8gk4Itael4wepjs46on/tgx4j3TZFhXazvoLh+reOf4T94br2qYjd5awdZ3rrEXAvKi8a1yzQi9+NTECmuVfuQz/n2SdeRAhfjnkm0qJn/yvTIL33jLhrVcYk6mImkFQ+r3LxSqU0gPx7qb3btfE4Px1JdSIevVTWZXoF9ZRsOJb35ac2+3iJJbw49ab/znwscWlfZeGGXt3TMhiDsH3RYVexctF9hAAAAAElFTkSuQmCC"
               alt="" /> */}
            {img}
            <h1> {num} </h1>
            {
               increased &&
               <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAjBAMAAAB4EQeYAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBQTFRFAAAADYn/Dov/Dor/Dor/DYf/DYn/Don/Don/DYr/DIf/DYv/Dor/EIf/Doj/CIf/CLsBjAAAABB0Uk5TAF/v3/9gUKCAn0C/zyCQIKPX7CcAAABuSURBVHic5c67DYAwEINhU/AoEcoijBDJdBQUNGxGyRDMwwqsQHwhITvg5vTraw6wDSO+VWT/lSN9SQU6lS8po4vlE03k+mKghawjikAiokhl2IhUQrQiq4DoRFYBge1I1ezvO1Z5/6pzLuu67TxbVyU2jsBxYgAAAABJRU5ErkJggg=="
                  alt="" className="MerchantRight_arrow__sz32P" />
            }
         </div>
      </div>
      </div>
   )
}
