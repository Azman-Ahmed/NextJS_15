const featureID = ({ params } : {params : {productid:string, featureid:string}}) => (
    <h1>Detail of Product {params.productid} review {params.featureid}</h1>
);
  
export default featureID;


