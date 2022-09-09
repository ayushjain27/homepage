import React, { useState } from 'react';
import styles from './Information.module.css'

const Information = () => {
    // const[ style, setStyle ] = useState({
    //         width: '900px',
    //         height: '900px',
    //         position: 'absolute',
    //         top: '0',
    //         left: '0',
    //         borderRadius: '50%',
    //         background: '#ccc'
    // }) 
    // const up = () => {
    //     setStyle({
            
    //     })
    // }

    // const down = () => {

    // }

  return (
    <>
        <div className={styles.information}>
            <img className={styles.mobile} src="./Images/mobile.png" alt="" />
            {/* <div style={style}> */}
            <div className={styles.circle}>
                <div className={`${styles.featureOne} d-flex text-white`}>
                    <img className={styles.img} src="./Images/camera.png" alt="" />
                    <div className={styles.features}>
                        <h1>Camera</h1>
                        <p className='p'>12MP, Wide Angle Lens</p>
                    </div>
                </div>
                <div className={`${styles.featureTwo} d-flex text-white`}>
                    <img className={styles.img} src="./Images/processor.png" alt="" />
                    <div className={styles.features}>
                        <h1>Processor</h1>
                        <p className='p'>Snapdragon Octa-core 11nm</p>
                    </div>
                </div>
                <div className={`${styles.featureThree} d-flex text-white`}>
                    <img className={styles.img} src="./Images/display.png" alt="" />
                    <div className={styles.features}>
                        <h1>Display</h1>
                        <p className='p'>6.5" Mini-Drop FullScreen</p>
                    </div>
                </div>
                <div className={`${styles.featureFour} d-flex text-white`}>
                    <img className={styles.img} src="./Images/battery.png" alt="" />
                    <div className={styles.features}>
                        <h1>Battery Life</h1>
                        <p className='p'>5000mAh, 720Hrs Standby</p>
                    </div>
                </div>
            </div>
        </div>

        <div className={`${styles.controls} text-center`}>
            <img className={styles.upBtn} src="./Images/arrow.png" alt="" />
            <h3 className={`${styles.h3} text-white`}>Features</h3>
            <img className={styles.downBtn} src="./Images/arrow.png" alt="" />
            {/* <img onClick={up} className={styles.upBtn} src="./Images/arrow.png" alt="" />
            <h3 className={`${styles.h3} text-white`}>Features</h3>
            <img onClick={down} className={styles.downBtn} src="./Images/arrow.png" alt="" /> */}
        </div>
    </>
  )
}

export default Information
