import type React from "react"

const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto px-4 max-w-7xl w-full">
      {children}
    </div>
  );
};

export default LayoutContainer