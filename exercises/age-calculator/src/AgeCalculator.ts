import Clock from "./Clock";

const MINIMUM_AGE_YEARS = 18;

export default class AgeCalculator {
  private clock: Clock = new Clock();
  private adult: boolean = false;

  constructor(private readonly birthDate: Date) {}

  public check(): void {
    const today = this.clock.getToday();
    const ageYears = this.ageInWholeYears(this.birthDate, today);

    console.log(ageYears);

    if (ageYears >= MINIMUM_AGE_YEARS) {
      this.adult = true;
    }
  }

  public isAdult(): boolean {
    return this.adult;
  }

  private ageInWholeYears(birth: Date, today: Date): number {
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  }
}
