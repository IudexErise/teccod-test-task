"use client";

import { Service } from "../types";

interface Props {
  service: Service;
  onAdd: (service: Service) => void;
}

export const ServiceItem = ({ service, onAdd }: Props) => {
  return (
    <div className="service-item">
      <div>
        <h3>{service.title}</h3>
        <p>${service.price}</p>
      </div>

      <button onClick={() => onAdd(service)} className="button">
        Добавить
      </button>
    </div>
  );
};
