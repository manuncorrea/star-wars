import { ReactNode } from "react";

interface BoxBorderProps {
  children: ReactNode
}

export function BoxBorder({ children }: BoxBorderProps) {
  return (
    <section className="py-4 py-lg-5 containter">
      <div className="row justify-content-center align-item-center">
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
          {children}
        </div>
      </div>
    </section>
  )
}