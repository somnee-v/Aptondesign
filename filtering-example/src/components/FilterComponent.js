const { useState, createElement } = React;

const FilterComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const optionsByCategory = {
    평형: ["10평", "20평", "30평", "40평", "50평", "그외"],
    스타일: [
      "모던",
      "화이트",
      "우드&화이트",
      "그레이",
      "포인트",
      "그레이&화이트",
    ],
    평당견적: ["180만원", "200만원", "230만원", "260만원"],
    정렬: ["최신순", "높은견적순", "낮은견적순", "큰 평형순", "작은 평형순"],
  };

  const images = [
    {
      id: 1,
      src: "1.jpg",
      categories: ["10평", "모던", "180만원"],
    },
    // 추가 이미지 정보
  ];

  const handleOptionChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((o) => o !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
  };

  const filteredImages = images.filter((image) =>
    selectedOptions.every((option) => image.categories.includes(option))
  );

  return createElement(
    "div",
    null,
    createElement(
      "div",
      { style: { display: "flex" } },
      Object.keys(optionsByCategory).map((category) =>
        createElement(
          "div",
          { key: category, style: { marginRight: "20px" } },
          createElement("p", null, `${category} 선택:`),
          createElement(
            "div",
            null,
            optionsByCategory[category].map((option) =>
              createElement(
                "label",
                { key: option, style: { display: "block" } },
                createElement("input", {
                  type: "checkbox",
                  value: option,
                  checked: selectedOptions.includes(option),
                  onChange: () => handleOptionChange(option),
                }),
                option
              )
            )
          )
        )
      )
    ),

    createElement(
      "div",
      null,
      createElement("p", null, "선택된 옵션:"),
      selectedOptions.map((selectedOption) =>
        createElement("div", { key: selectedOption }, selectedOption)
      ),
      createElement(
        "div",
        null,
        createElement("p", null, "이미지:"),
        filteredImages.map((image) =>
          createElement(
            "div",
            { key: image.id },
            createElement("img", {
              src: image.src,
              alt: `Image ${image.id}`,
              style: { width: "200px", height: "200px" },
            })
          )
        )
      )
    )
  );
};

export default FilterComponent;
