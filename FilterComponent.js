import React from "react";
import ReactDOM from "react-dom";
import FilterComponent from "./filtering-example/src/components/FilterComponent";

// #root 요소에 FilterComponent 컴포넌트를 렌더링합니다.
const rootElement = document.getElementById("root");
ReactDOM.render(<FilterComponent />, rootElement);
