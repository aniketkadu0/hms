export default function Paragraph() {
  return (
    <div className="row justify-content-center p-3">
      <div className="col-10 col-lg-12 col-xl-12">
        <div className="card">
          <h3 className="card-header">About us</h3>
          <div className="card-body" style={{ padding: "30px 50px 20px 50px" }}>
            <p>
              <img
                src={require('../../Images/index.jpeg')}
                className="rounded-circle border border-5 border-white shadow"
                alt="Bengaluru"
                align="left"
                hspace="10"
              />
              C-DAC, Bengaluru centre, is the 2nd of C-DAC centres established
              in 1989 to carry-out research and deliver solutions and products
              in the area of System Software for PARAM series of supercomputers
              of C-DAC. PARAM Padma was housed at C-DAC's Terascale
              Supercomputing Facility (CTSF), results from its third mission
              project in High-Performance Computing Technologies, which was
              listed in the Top 500 Supercomputers.
            </p>
            <p>
              The centre is equipped with PARAM Utkarsh Supercomputing facility,
              contributing towards National Super computer mission (NSM) and
              offers HPC System Software solutions &amp; services along with
              development of debuggers, profilers, web frameworks, high speed
              data transfer tools for national grid computing, AI framework
              &amp; big data Software suites, and gateways for multiple
              scientific application domains.{" "}
            </p>
            <p>
              The centre is highly acclaimed as a centre for excellence in the
              thematic areas of HPC, Grid Computing, Hardware Security, Cyber
              Security, IoT, DNSSec, Professional Electronics, FOSS and Software
              Technologies, Language and Heritage Computing, Knowledge &
              Resource Centre for Accessibility, ICT for Social welfare,
              Consultancy and Training. C-DAC Bengaluru is enriched with
              indigenous solutions in cloud security, next generation SCADA
              systems, Industrial control systems, critical infrastructure
              Security, power optimization for HPC, Network firewall systems,
              Indian Heritage and Language computing, IoT solutions for smart
              cities, Smart Post Kiosk, Indus IoT Kit, IoT Lab Kit, Indus
              Copter, Smart Energy Meter, ICT for Social Welfare, 32-bit High
              performance Microcontroller, chip design, crypto module validation
              and Quantum Simulator. This center is involved in disseminating
              vast experience for the enrichment of education and knowledge.
              Apart from the R& D projects, C-DAC Bangalore offers the following
              services:
            </p>
            <ul>
              <li>
                Onsite Application services for HPC and other IT applications{" "}
              </li>
              <li>
                Conducting training programs in the emerging areas of Parallel
                Programming, Many core GPGPU / accelerator architectures, Cloud
                computing, Grid computing, High performance Peta-exascale
                computing, etc.
              </li>
              <li>
                Porting of applications on state-of-the-art HPC system and
                parallelization of serial codes
              </li>
              <li>
                Provide design consultancy in the emerging technology areas
              </li>
              <li>
                Scientific software products for Parallel Programming such as
                Automatic Code Parallelizer, Parallel Program Development
                Environment, HPC Profiler, etc.{" "}
              </li>
              <li>
                Cloud Builder and Labkit, Porting applications to Cloud, cloud
                based solutions
              </li>
              <li>
                Design and Development of custom web based solutions such as
                Problem Solving Environments, Scientific Workflows, Portals,
                IDEs, etc.
              </li>
              <li>
                Advanced Security audit, disaster recovery, designing and
                implementing the security policy
              </li>
              <li>
                Provide C-DAC’s HPC Systems Facility as a service for
                exploratory study{" "}
              </li>
              <li>
                Benchmarking of Applications to assess HPC requirement for the
                respective applications
              </li>
            </ul>
            <table>
              <tbody>
            <tr>
              <td>
                  <ol>
                  Some of the prestigious clients are as follows:
                  <li>Chief Electoral Officer – Karnataka</li>
                  <li>POSOCO, New Delhi</li>
                  <li>DRDO Labs </li>
                  <li>Office of CCA, MeitY</li>                  
                  </ol>
              </td>
              <td>
                  <ol>   
                    .           
                  <li>Bharat Electronics Ltd. </li>
                  <li>Bangalore Metro Rail Corpn. Ltd., Bangalore</li>
                  <li>Continental Automotive Components, Bangalore</li>
                  <li>Central Reserve Police Force (CRPF). </li>
                  </ol>
              </td>
            </tr>
            </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
}
