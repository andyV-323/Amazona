function ProductScreen() {
    const params = useParams();
    const {slug} = params;
    return (
            <div>
                <h1>{slug}</h1>
                <h2>{slug}</h2>
            </div>
}

export default ProductScreen;