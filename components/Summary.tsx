import { SelectedItem } from "../types";

interface Props {
  selected: SelectedItem[];
}

export const Summary = ({ selected }: Props) => {
  const total = selected.reduce((sum, s) => sum + s.price * s.quantity, 0);

  return (
    <div className="summary">
      <h2>Итого</h2>

      {selected.length === 0 && <p>Ничего не выбрано</p>}

      {selected.map((s) => (
        <div key={s.id} className="summary-item">
          <span>
            {s.title} {s.quantity > 1 && `(x${s.quantity})`}
          </span>
          <span>${s.price * s.quantity}</span>
        </div>
      ))}

      <div className="summary-total">
        <strong>Сумма:</strong> ${total}
      </div>

      <button disabled={selected.length === 0} className="button">
        Оформить заказ
      </button>
    </div>
  );
};
