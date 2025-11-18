import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    'Congenital Anomalies': 4000,
    'Respiratory Diseases': 2400,
  },
  {
    name: 'Feb',
    'Congenital Anomalies': 3000,
    'Respiratory Diseases': 1398,
  },
  {
    name: 'Mar',
    'Congenital Anomalies': 2000,
    'Respiratory Diseases': 9800,
  },
  {
    name: 'Apr',
    'Congenital Anomalies': 2780,
    'Respiratory Diseases': 3908,
  },
  {
    name: 'May',
    'Congenital Anomalies': 1890,
    'Respiratory Diseases': 4800,
  },
  {
    name: 'Jun',
    'Congenital Anomalies': 2390,
    'Respiratory Diseases': 3800,
  },
  {
    name: 'Jul',
    'Congenital Anomalies': 3490,
    'Respiratory Diseases': 4300,
  },
];

const ClimateHealthPage = () => {
  return (
    <main className="flex-1 p-6 md:p-10">
      <div className="max-w-4xl mx-auto">
        <article className="space-y-8">
          <header>
            <h1 className="text-4xl font-bold text-primary mb-4">
              Climate-Related Health Risks
            </h1>
            <p className="text-xl text-muted-foreground">
              Forecast and give real-time alerts to local communities on high peak GHG exposure and the mixed air quality/pollution/heat consequences on health.
            </p>
          </header>

          <Card>
            <CardHeader>
              <CardTitle>Health Impact of GHG Emissions</CardTitle>
              <CardDescription>
                Correlation between GHG concentrations and health risks.
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
                  <Bar dataKey="Respiratory Diseases" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-2xl font-bold">Primary alignment with public health goals:</h2>
            <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                    SATCAP-CO₂ uses AI and satellite data to map and analyze CO₂, CH₄, and CO concentrations that directly affect maternal and child health, particularly in relation to congenital and respiratory diseases.
                </li>
                <li>
                    It focuses on climate-induced health vulnerabilities, providing evidence-based insights and early warnings for exposure risks.
                </li>
                <li>
                    The initiative also integrates community-based education and public health planning, making it fundamentally a health-centered climate solution.
                </li>
            </ul>
        </div>
        
        <div>
            <h3 className="text-xl font-semibold">Secondary alignment (optional mention in proposal):</h3>
            <p className="text-muted-foreground mt-2">
                The project also supports broader public health strategies by providing critical data for urban planning, environmental regulations, and healthcare resource allocation.
            </p>
        </div>

        <div>
            <h3 className="text-xl font-semibold">FAQs</h3>
            <p className="text-muted-foreground mt-2">
            This section would answer frequently asked questions about how the project’s data can be used by public health officials, researchers, and the general public to mitigate climate-related health risks.
            </p>
        </div>
    </article>
      </div>
    </main>
  );
};

export default ClimateHealthPage;
