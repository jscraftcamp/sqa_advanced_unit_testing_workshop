TirePressure Kata
=================

Write the unit tests for the Alarm class. The Alarm class is designed to monitor tire pressure and set an alarm if the pressure falls outside of the expected range. The Sensor class provided for the exercise fakes the behaviour of a real tire sensor, providing random but realistic values.

Acknowledgements
----------------

This exercise was originally designed by Luca Minudel and is included in his repo [TDDwithMockObjectsAndDesignPrinciples](https://github.com/lucaminudel/TDDwithMockObjectsAndDesignPrinciples). See also the video I made about it: https://youtu.be/ldthYMeXSoI


---

```mermaid
flowchart LR
    Test((Test))
    Alarm((Alarm))
    SensorInterface{Sensor}

    RealSensor([Real Sensor])
    RandomSensor([Random Sensor])
    StubSensor([Stub Sensor])

    Alarm -->|nutzt| SensorInterface
    SensorInterface -.->|Implementation| RealSensor
    SensorInterface -.->|Implementation| RandomSensor
    SensorInterface -.->|Implementation| StubSensor

    RealSensor --> HTTP((HTTP))

    Test -- "1. nextSensorValue(16)" --> StubSensor
    Test -- "2. check()" --> Alarm
```