const UrlGenerator = (props) => (
    <form className="wrapper">
        <input type="text" placeholder="Enter a valid url" required />
        <button onClick={props.onSubmit}>Generate Tiny Url</button>
    </form>
);

module.exports = UrlGenerator;
