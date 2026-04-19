const baseDateMs = new Date(2024, 0, 1).getTime();

export default class Clock {
  public getToday(): Date {
    return new Date(baseDateMs + this.sampleTimeOffsetMs());
  }

  private sampleTimeOffsetMs(): number {
    // placeholder implementation that simulates a real clock with slight drift
    return 6 * Math.random() * Math.random() * 24 * 60 * 60 * 1000;
  }
}
