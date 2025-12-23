"use client";

import { ServicesList } from "@/components/ServicesList";
import { Summary } from "@/components/Summary";
import { SelectedItem, Service } from "@/types";
import { useState } from "react";

const servicesMock: Service[] = [
  { id: "1", title: "Дополнительный багаж", price: 1200 },
  { id: "2", title: "Выбор места", price: 750 },
  { id: "3", title: "Питание на борту", price: 300 },
];

export default function Page() {
  const [selected, setSelected] = useState<SelectedItem[]>([]);

  const handleAdd = (service: Service) => {
    setSelected((prev) => {
      const existing = prev.find((item) => item.id === service.id);

      if (existing) {
        return prev.map((item) =>
          item.id === service.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...service, quantity: 1 }];
    });
  };

  return (
    <div className="container">
      <h1>Дополнительные услуги</h1>

      <ServicesList services={servicesMock} onAdd={handleAdd} />

      <Summary selected={selected} />
    </div>
  );
}
