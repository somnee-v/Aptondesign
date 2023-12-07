// FilterComponent.js
import React, { useState } from "react";

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
    공간별: ["거실", "주방", "침실", "욕실", "아이방", "드레스룸", "ETC"],
    정렬: ["최신순", "높은견적순", "낮은견적순", "큰 평형순", "작은 평형순"],
  };

  const handleOptionChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((o) => o !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        {Object.keys(optionsByCategory).map((category) => (
          <div key={category} style={{ marginRight: "20px" }}>
            <p>{category} 선택:</p>
            <div>
              {optionsByCategory[category].map((option) => (
                <label key={option} style={{ display: "block" }}>
                  <input
                    type="checkbox"
                    value={option}
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionChange(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <p>선택된 옵션:</p>
        {selectedOptions.map((selectedOption) => (
          <div key={selectedOption}>{selectedOption}</div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
