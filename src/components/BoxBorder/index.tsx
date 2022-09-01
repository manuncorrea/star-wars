import { ReactNode } from "react";

interface BoxBorderProps {
  children: ReactNode
};

export function BoxBorder({ children }: BoxBorderProps) {
  return (
    <section className="py-4 py-lg-5 containter">
      <div className="row justify-content-center align-item-center">
        {children}
      </div>
    </section>
  )
};


