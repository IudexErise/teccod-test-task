"use client";

import { Service } from "../types";
import { ServiceItem } from "./ServiceItem";

interface Props {
  services: Service[];
  onAdd: (service: Service) => void;
}

export const ServicesList = ({ services, onAdd }: Props) => {
  return (
    <div className="services-list">
      {services.map((s) => (
        <ServiceItem key={s.id} service={s} onAdd={onAdd} />
      ))}
    </div>
  );
};
