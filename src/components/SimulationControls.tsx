interface Props {
  onPlay: () => void;
  onPause: () => void;

  selectedDate: string;
  selectedTime: string;
  selectedSpeed: number;

  onDateChange: (value: string) => void;
  onTimeChange: (value: string) => void;
  onSpeedChange: (value: number) => void;
}

export default function SimulationControls({
  onPlay,
  onPause,

  selectedDate,
  selectedTime,
  selectedSpeed,

  onDateChange,
  onTimeChange,
  onSpeedChange,
}: Props) {
  return (
    <div>
      <h3
        style={{
          marginBottom: "15px",
        }}
      >
        Simulation Controls
      </h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "15px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <label>
            Date
          </label>

          <br />

          <input
            type="date"
            min="2026-09-01"
            max="2026-09-30"
            value={selectedDate}
            onChange={(e) =>
              onDateChange(
                e.target.value
              )
            }
          />
        </div>

        <div>
          <label>
            Start Time
          </label>

          <br />

          <input
            type="time"
            value={selectedTime}
            onChange={(e) =>
              onTimeChange(
                e.target.value
              )
            }
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "15px",
        }}
      >
        <button
          onClick={onPlay}
        >
          ▶ Play
        </button>

        <button
          onClick={onPause}
        >
          ⏸ Pause
        </button>
      </div>

      <div>
        <label>
          Simulation Speed
        </label>

        <br />

        <select
          value={selectedSpeed}
          onChange={(e) =>
            onSpeedChange(
              Number(
                e.target.value
              )
            )
          }
        >
          <option value={1}>
            1x (5 min/sec)
          </option>

          <option value={12}>
            12x (1 hour/sec)
          </option>

          <option value={24}>
            24x (2 hours/sec)
          </option>

          <option value={60}>
            60x (5 hours/sec)
          </option>

          <option value={120}>
            120x (10 hours/sec)
          </option>
        </select>
      </div>
    </div>
  );
}
