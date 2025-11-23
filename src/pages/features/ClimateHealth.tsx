
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', 'Congenital Anomalies': 2500, 'GHG Concentration': 2400 },
  { name: 'Feb', 'Congenital Anomalies': 2000, 'GHG Concentration': 1398 },
  { name: 'Mar', 'Congenital Anomalies': 8500, 'GHG Concentration': 9800 },
  { name: 'Apr', 'Congenital Anomalies': 4000, 'GHG Concentration': 3908 },
  { name: 'May', 'Congenital Anomalies': 5000, 'GHG Concentration': 4800 },
  { name: 'Jun', 'Congenital Anomalies': 4200, 'GHG Concentration': 3800 },
  { name: 'Jul', 'Congenital Anomalies': 4800, 'GHG Concentration': 4300 },
];

const ClimateHealthPage = () => {
  return (
    <main className="flex-1 p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <article className="space-y-8">
          <header>
            <h1 className="text-4xl font-bold text-primary mb-4">
              SATCAP Health: Improving Maternal and Child Health in Benin
            </h1>
            <p className="text-xl text-muted-foreground">
              A causal pathway from satellite-derived climate intelligence to improved health outcomes for pregnant women and children.
            </p>
          </header>

          <Card>
            <CardHeader>
              <CardTitle>Correlation Between GHG Emissions and Congenital Anomalies</CardTitle>
              <CardDescription>
                This chart illustrates the correlation between greenhouse gas concentrations and the incidence of congenital anomalies, highlighting the potential impact on pregnant women and their children.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis width={48} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Congenital Anomalies" fill="#3b82f6" />
                  <Bar dataKey="GHG Concentration" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-3xl font-bold mb-4">SATCAP-Health Theory of Change</h2>
            <p className="text-muted-foreground mb-6">
              The Theory of Change (ToC) of the SATCAP-Health project articulates a clear, evidence-based causal pathway through which satellite-derived climate and pollution intelligence is transformed into improved maternal and child health outcomes in Benin. It follows a logical sequence: Inputs → Activities → Outputs → Outcomes → Impact, grounded in scientific plausibility, technical feasibility, and participatory implementation.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold">Inputs</h3>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                  <li>Satellite Earth observation data (e.g., Sentinel-5P/TROPOMI)</li>
                  <li>AI/ML models for environmental analytics</li>
                  <li>Data science pipelines</li>
                  <li>Blockchain infrastructure for data integrity</li>
                  <li>Ground-based sensors (PM₂.₅, NO₂, etc.)</li>
                  <li>Maternal and child health records</li>
                  <li>Multidisciplinary research team</li>
                  <li>Partnerships with ministries, CERRHUD, UNICEF, and communities</li>
                  <li>Funding and ethical approvals</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">Activities</h3>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                  <li>Develop AI models to detect pollutants (PM₂.₅, PM₁₀, NO₂, O₃, CH₄, CO, SO₂) and heat anomalies</li>
                  <li>Fuse satellite, sensor, and meteorological data into high-resolution exposure surfaces</li>
                  <li>Link geocoded maternal locations (home, work, delivery site) to exposure maps</li>
                  <li>Conduct epidemiological analyses (retrospective cohort, case-control) on exposure–health links</li>
                  <li>Build and pilot an early-warning system (SMS, dashboards) for pregnant women and clinics</li>
                  <li>Deploy a permissioned blockchain ledger for transparent data governance and carbon accounting</li>
                  <li>Train health workers, data scientists, and community facilitators</li>
                  <li>Co-design risk communication and behavioral interventions with women’s and youth groups</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">Outputs</h3>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                  <li>Validated, near real-time exposure maps (≤1 km resolution)</li>
                  <li>Operational early-warning system for pollution/heat spikes</li>
                  <li>Peer-reviewed evidence on associations between environmental exposures and congenital heart defects (CHDs), preterm birth, low birth weight, and neonatal mortality</li>
                  <li>Blockchain-secured registry of environmental data and emission reductions</li>
                  <li>Policy briefs and technical dashboards for government use</li>
                  <li>Trained national workforce in climate–health intelligence</li>
                  <li>Community awareness kits and digital curriculum</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">Outcomes (Short–Medium Term)</h3>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                  <li>Institutional: Ministries integrate SATCAP-Health data into health and climate planning</li>
                  <li>Technical: National capacity to monitor, predict, and verify climate–health risks</li>
                  <li>Community: Pregnant women and caregivers adopt protective behaviors (e.g., reduce outdoor activity during alerts)</li>
                  <li>Trust & Governance: Increased confidence via transparent, tamper-proof data</li>
                  <li>Policy: Adoption of localized heat–health and air-quality response protocols</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">Impact (Long-Term)</h3>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                  <li>Reduced in utero and early-life exposure to PM₂.₅ and extreme heat</li>
                  <li>Lower incidence of congenital heart defects, preterm birth, low birth weight, and neonatal mortality</li>
                  <li>Strengthened, climate-resilient health systems institutionalized in Benin</li>
                  <li>Enhanced national readiness for carbon markets through verified health co-benefits</li>
                  <li>Empowered communities—especially women and youth—leading local climate–health action</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">Key Assumptions Underlying the ToC</h3>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                    <li>Satellite and AI methods can produce accurate, locally relevant exposure estimates in data-scarce settings.</li>
                    <li>Health systems and communities will act on timely, trusted warnings.</li>
                    <li>Government institutions are willing to adopt digital climate–health intelligence.</li>
                    <li>Community engagement ensures cultural relevance and sustained behavioral change.</li>
                    <li>Blockchain enhances data integrity and enables future climate finance mechanisms.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">Pathway Summary</h3>
                <p className="text-muted-foreground mt-2">
                    Digital Climate Intelligence → Local Capacity → Community Awareness → Policy Adoption → Reduced Exposure → Improved Maternal & Child Health → Climate-Resilient Societies
                </p>
              </div>

            </div>
            <p className="text-muted-foreground mt-6">
              This ToC reflects SATCAP-Health’s core innovation: turning invisible atmospheric threats into visible, actionable, and trusted insights that protect the most vulnerable—pregnant women and children—in an era of accelerating climate and pollution crises.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
};

export default ClimateHealthPage;
