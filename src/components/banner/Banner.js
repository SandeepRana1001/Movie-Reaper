import React from "react";
import styles from './Banner.module.css'

const Banner = () => {
    return (
        <div className={`container-fluid ${styles.banner}`}>
            <div className='row justify-content-center '>
                <div className='col-lg-10 col-md-10 col-sm-12 col-12'>
                    <div className={styles.center_box}>
                        <h2>
                            Download Movie Reaper movies: HD smallest size
                        </h2>
                        <p className='mt-4'>
                            Welcome to the official Movie Reaper.MX (.LT) website. Here you can browse and download  movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. Movie Reaper Movies Torrents.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner