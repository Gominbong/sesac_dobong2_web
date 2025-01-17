import { useParams, useNavigate } from "react-router";

export function ProductDetailPage({ products }) {
  const navigate = useNavigate();
  console.log(products);
  const params = useParams();
  console.log("params", params);
  const { productID } = useParams();
  console.log("productID", productID);
  const [targetProduct] = products.filter((p) => p.id === Number(productID));
  console.log("targetProduct", targetProduct);
  return (
    <main>
      <p>여기는 상품 디테일 페이지!</p>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate("/")}>홈으로 이동</button>
      <ul>
        <li>판매번호: {targetProduct.id}</li>
        <li>상품명: {targetProduct.name}</li>
        <li>판매자: {targetProduct.email}</li>
        <li>상세설명: {targetProduct.body}</li>
      </ul>
    </main>
  );
}
