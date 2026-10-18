export default function
SimulationControls() {

  return (

    <div>

      <h2>
        Simulation Controls
      </h2>

      <input
        type="date"
      />

      <button>
        ▶ Play
      </button>

      <button>
        ⏸ Pause
      </button>

      <select>

        <option>
          0.5x
        </option>

        <option>
          1x
        </option>

        <option>
          2x
        </option>

        <option>
          4x
        </option>

        <option>
          8x
        </option>

      </select>

    </div>
  );
}