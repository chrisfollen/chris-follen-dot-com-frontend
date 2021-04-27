import React, { useState } from 'react'
import PhotoModal from './components/PhotoModal'

export default function Photo() {

    const [photoModalClass, setPhotoModalClass] = useState('photo-modal')
    const [currentPhoto, setCurrentPhoto] = useState('')

    const togglePhotoModal = () => {
        if (photoModalClass === 'photo-modal') {
          setPhotoModalClass('photo-modal photo-modal-active')
        } else {
          setPhotoModalClass('photo-modal')
        }
    }

    const handlePhotoClick = (event) => {
        const photoURL = event.target.src
        setCurrentPhoto(photoURL)
        togglePhotoModal()
    }

    return (
        <div className = 'photo'>
            <div className = 'gallery-container'>
                <div className ='gallery-column left-gallery-column'>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-10.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad" />
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-50.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-58.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-12.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-35.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-4.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-13.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-15.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-3.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-46.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-5.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-24.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-17.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-22.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-25.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-27.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-33.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-36.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-44.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-40.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-56.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                </div>
                <div className ='gallery-column middle-gallery-column'>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-43.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-47.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-42.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-20.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-19.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-8.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-39.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-21.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-23.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-48.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-28.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-26.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-52.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-32.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-45.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-48.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-49.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                </div>
                <div className ='gallery-column right-gallery-column'>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-14.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-34.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-6.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-57.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-7.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-2.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-1.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-18.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-11.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-16.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-55.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-9.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-37.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-30.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-29.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-31.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-54.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-41.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-51.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                    <img className = 'gallery-photo clickable' onClick={handlePhotoClick} src="https://firebasestorage.googleapis.com/v0/b/chris-follen-site.appspot.com/o/gallery%2Fcwf-53.jpg?alt=media&token=8b1ba76e-b542-4488-935b-1e0adc3b92e6" alt="rad"/>
                </div>

            </div>
            <PhotoModal photoModalClass={photoModalClass} togglePhotoModal={togglePhotoModal} photoURL={currentPhoto}/>
        </div>
    )
}
