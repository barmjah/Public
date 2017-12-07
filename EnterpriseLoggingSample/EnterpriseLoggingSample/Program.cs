using Microsoft.Practices.EnterpriseLibrary.Logging;

namespace EnterpriseLoggingSample
{
    class Program
    {
        static void Main(string[] args)
        {
            Logger.SetLogWriter(new LogWriterFactory().Create());
            Logger.Write("Hello World", "General");

            //System.Diagnostics.Process.Start("trace.log");
        }
    }
}
