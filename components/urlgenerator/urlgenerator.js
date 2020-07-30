const UrlGenerator = (props) => (
    <div className="wrapper">
        <input type="text" placeholder="Enter a valid url" />
        <button onClick={props.handleOnSubmit}>Generate Tiny Url</button>
    </div>
);

export default UrlGenerator;