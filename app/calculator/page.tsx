"use client"

import { useState } from "react"
import styles from "./calculator.module.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function KnowYourWorthPage() {
  const [vehicleType, setVehicleType] = useState("CDL Reefer Box Truck")
  const [totalPay, setTotalPay] = useState("")
  const [loadedMiles, setLoadedMiles] = useState("")
  const [deadheadMiles, setDeadheadMiles] = useState("")
  const [lodgingCost, setLodgingCost] = useState("")
  const [reloadMiles, setReloadMiles] = useState("")
  const [picks, setPicks] = useState("")
  const [drops, setDrops] = useState("")
  const [results, setResults] = useState<string | null>(null)

  const calculateResults = () => {
    const totalPayValue = Number.parseFloat(totalPay) || 0
    const loadedMilesValue = Number.parseFloat(loadedMiles) || 0
    const deadheadMilesValue = Number.parseFloat(deadheadMiles) || 0
    const lodgingCostValue = Number.parseFloat(lodgingCost) || 0
    const reloadMilesValue = Number.parseFloat(reloadMiles) || 0
    const picksValue = Number.parseInt(picks) || 0
    const dropsValue = Number.parseInt(drops) || 0

    const totalMiles = loadedMilesValue + deadheadMilesValue
    const totalStops = picksValue + dropsValue

    let driverWeeklyPay,
      mpg,
      rentalCost,
      fuelPrice,
      mileageCost,
      defRate,
      perMilePay,
      reeferFuelRate,
      breakEvenRPM,
      targetRPM,
      idealRPM

    switch (vehicleType) {
      case "CDL Reefer Box Truck":
        driverWeeklyPay = 1500
        perMilePay = 0.3
        mpg = 8.5
        rentalCost = 1500
        mileageCost = totalMiles * 0.3
        fuelPrice = 3.66
        defRate = 0.002
        reeferFuelRate = 0.061
        breakEvenRPM = 3.0
        targetRPM = 3.5
        break
      case "Box Truck Non-CDL":
        driverWeeklyPay = 1000
        perMilePay = 0
        mpg = 8.5
        rentalCost = 800
        mileageCost = 0
        fuelPrice = 3.66
        defRate = 0.002
        reeferFuelRate = 0.061
        breakEvenRPM = 3.0
        targetRPM = 3.5
        break
      case "Semi Truck Reefer":
        driverWeeklyPay = 1600
        perMilePay = 0
        mpg = 6.0
        rentalCost = 1000 + 400
        mileageCost = totalMiles * 0.12 + totalMiles * 0.05
        fuelPrice = 3.66
        defRate = 1 / 200
        reeferFuelRate = 0.061
        breakEvenRPM = 3.0
        targetRPM = 3.5
        break
      default:
        driverWeeklyPay = 0
        perMilePay = 0
        mpg = 1
        rentalCost = 0
        mileageCost = 0
        fuelPrice = 4.85
        defRate = 0
        reeferFuelRate = 0
        breakEvenRPM = 3.0
        targetRPM = 3.5
    }

    idealRPM = targetRPM * 1.15

    const driverDailyPay = (driverWeeklyPay * 4.33) / 30
    const driverPerMilePay = perMilePay * totalMiles
    const fuelUsage = totalMiles / mpg
    const fuelCost = fuelUsage * fuelPrice
    const defUsage = fuelUsage * defRate
    const defCost = defUsage * 1.08
    const reeferFuelCost = totalMiles * reeferFuelRate
    const factoringFee = (2.7 / 100) * totalPayValue
    const dailyRentalCost = rentalCost / 7
    const dailyOverhead = 387.38

    const hoursNeeded = totalMiles / 50
    const timeUtilization = (hoursNeeded / 11) * 100

    const netRevenue =
      totalPayValue -
      fuelCost -
      defCost -
      reeferFuelCost -
      factoringFee -
      driverDailyPay -
      driverPerMilePay -
      dailyRentalCost -
      mileageCost -
      lodgingCostValue -
      dailyOverhead
    const profitPerHour = Math.round(netRevenue / hoursNeeded)
    const rpm = loadedMilesValue > 0 ? totalPayValue / loadedMilesValue : 0

    const stopsToMilesRatio = totalStops / totalMiles

    let complexityMessage = ""
    let complexityColor = ""
    if (totalStops > 3) {
      complexityMessage = "🔴 High Complexity (Requires Scrutiny)"
      complexityColor = "red"
    } else if (totalStops === 3) {
      complexityMessage = "🟡 Moderate Complexity"
      complexityColor = "yellow"
    } else {
      complexityMessage = "✅ Normal Load"
      complexityColor = "green"
    }

    let recommendation = ""
    let color = ""
    if (rpm >= targetRPM) {
      recommendation = "Take (Profitable)"
      color = "green"
    } else if (rpm >= breakEvenRPM && rpm < targetRPM) {
      recommendation = `Negotiate (Must be at least $${targetRPM.toFixed(2)}/mile)`
      color = "orange"
    } else {
      recommendation = `Decline (Too low, must be at least $${breakEvenRPM.toFixed(2)}/mile)`
      color = "red"
    }

    setResults(`
      <hr>
      <h2>Daily Results</h2>
      <p><strong>Vehicle Type:</strong> ${vehicleType}</p>
      <p><strong>Loaded Miles:</strong> ${loadedMilesValue.toLocaleString()}</p>
      <p><strong>Deadhead Miles:</strong> ${deadheadMilesValue.toLocaleString()}</p>
      <p><strong>Total Miles:</strong> ${totalMiles.toLocaleString()}</p>
      <p><strong>Total Pay (Broker's Offer):</strong> $${totalPayValue.toFixed(2)}</p>
      <p><strong>Time Utilization Factor:</strong> ${timeUtilization.toFixed(2)}%</p>
      <p><strong>Profit Per Hour:</strong> $${profitPerHour}</p>
      <p><strong>Break-even Rate:</strong> $${breakEvenRPM.toFixed(2)}/mile</p>
      <p><strong>Target Rate:</strong> $${targetRPM.toFixed(2)}/mile</p>
      <p><strong>Ideal Rate:</strong> $${idealRPM.toFixed(2)}/mile</p>
      <p><strong>Recommendation:</strong> <span style="color: ${color}; font-weight: bold;">${recommendation}</span></p>
      <div class="${styles.suggestionBox}">
        <p><strong>Suggested Target Rate:</strong> $${targetRPM.toFixed(2)}/mile</p>
        <p><strong>Suggested Ideal Rate:</strong> $${idealRPM.toFixed(2)}/mile</p>
      </div>
      <p style="color: ${complexityColor}; font-weight: bold;"><strong>Pick & Drop Complexity:</strong> ${complexityMessage}</p>
    `)
  }

  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.container}>
        <h1>Know Your Worth Tool</h1>

        <div className={styles.inputGroup}>
          <label htmlFor="vehicleType">Vehicle Type:</label>
          <select id="vehicleType" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
            <option value="CDL Reefer Box Truck">CDL Reefer Box Truck</option>
            <option value="Box Truck Non-CDL">Box Truck Non-CDL</option>
            <option value="Semi Truck Reefer">Semi Truck Reefer</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="totalPay">Total Pay (Broker's Offer):</label>
          <input type="number" id="totalPay" value={totalPay} onChange={(e) => setTotalPay(e.target.value)} />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="loadedMiles">Loaded Miles:</label>
          <input type="number" id="loadedMiles" value={loadedMiles} onChange={(e) => setLoadedMiles(e.target.value)} />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="deadheadMiles">Deadhead Miles:</label>
          <input
            type="number"
            id="deadheadMiles"
            value={deadheadMiles}
            onChange={(e) => setDeadheadMiles(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="lodgingCost">Lodging Cost:</label>
          <input type="number" id="lodgingCost" value={lodgingCost} onChange={(e) => setLodgingCost(e.target.value)} />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="reloadMiles">Reload Miles:</label>
          <input type="number" id="reloadMiles" value={reloadMiles} onChange={(e) => setReloadMiles(e.target.value)} />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="picks">Number of Picks:</label>
          <input type="number" id="picks" value={picks} onChange={(e) => setPicks(e.target.value)} />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="drops">Number of Drops:</label>
          <input type="number" id="drops" value={drops} onChange={(e) => setDrops(e.target.value)} />
        </div>

        <button onClick={calculateResults}>Calculate</button>

        {results && <div id="results" dangerouslySetInnerHTML={{ __html: results }} />}

        <div className={styles.pitch}>
          <h2>So you're here to check out our Fair Freight Tool?</h2>
          <p>
            We're still working on making that sound better, but..it is a smarter way for carriers to analyze loads,
            ensure profitability, and make data-driven decisions.
          </p>
          <p>
            This tool is designed to help carriers confidently evaluate freight, ensuring every haul aligns with their
            financial goals.
          </p>
          <p>
            While brokers and shippers set rates, you control what loads you accept. By understanding your break-even
            point, ideal rate per mile, and true profit margins, you can negotiate more effectively and maximize
            revenue.
          </p>
          <p>This isn't about fighting brokers—it's about running your business smarter.</p>
          <h3>🚀 Coming Soon: A Full Carrier-Focused TMS!</h3>
          <p>
            We're building a Transportation Management System (TMS) designed specifically for carriers, giving you load
            tracking, cost analysis, and smarter dispatching—all in one place.
          </p>
          <p>Stay tuned as we roll out new features to help you grow your business.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

