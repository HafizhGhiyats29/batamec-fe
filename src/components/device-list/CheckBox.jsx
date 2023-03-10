import React from "react";
const CheckBox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  return (
    <div className="flex justify-center items-center">
      <input type="checkbox" ref={resolvedRef} {...rest} className="w-[18px] h-[18px] border-2 border-[#2D5BFF]" id="check" />
    </div>
  );
});
export default CheckBox;
