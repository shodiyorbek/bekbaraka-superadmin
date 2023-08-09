import './Uploader.scss'
const ImgUpload = ({ onChange, src }) => (
    <div className={"uploader"}>
        <label htmlFor="photo-upload" className="custom-file-upload fas">
            <div className="img-wrap img-upload">
                <img accessKey={'image/png'} htmlFor="photo-upload" src={src} alt="Uploaded" />
            </div>
            <input accept="image/*" id="photo-upload" type="file" onChange={onChange} />
        </label>

    </div>

);
export default ImgUpload;