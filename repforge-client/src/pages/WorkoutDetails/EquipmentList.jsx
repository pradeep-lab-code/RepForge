import {
  Barbell,
  Backpack,
  Gear,
} from "phosphor-react";

const equipmentIcons = {
  Barbell: <Barbell size={20} />,
  Bench: <Gear size={20} />,
  Dumbbells: <Backpack size={20} />,
};

const EquipmentList = ({ workout }) => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-text-primary mb-5">
        Equipment Needed
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        {workout.equipments.map((item) => (
          <div
            key={item}
            className="bg-surface border border-border rounded-2xl p-5 flex items-center gap-4"
          >
            <div className="text-primary">
              {equipmentIcons[item] || <Barbell size={20} />}
            </div>

            <span className="text-text-primary font-medium">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EquipmentList;