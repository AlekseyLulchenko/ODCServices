using System.Diagnostics;
using System.IO;
using System.Reflection;
using ODCServices.Core.Interfaces.Passwords;

namespace ODCServices.Core.PasswordObfuscator
{
	public class ExternalExePasswordObfuscator : IObfuscator
	{
		private const string EXE_FILE_NAME = "";

		private readonly string _exeFileFullName;

		public ExternalExePasswordObfuscator()
		{
			DirectoryInfo directoryInfo = new DirectoryInfo(Assembly.GetExecutingAssembly().Location);
			_exeFileFullName = Path.Combine(directoryInfo.Parent + "\\Utilities\\Obfuscator\\DecodePaswd.exe");
		}

		public string Obfuscate(string plainPassword)
		{
			Process process = PrepareProcess();
			process.StartInfo.Arguments = " o " + plainPassword;

			process.Start();
			string obfuscatedPassword = process.StandardOutput.ReadToEnd();
			process.WaitForExit();

			return obfuscatedPassword;
		}

		public string DeObfuscate(string obfuscatedPassword)
		{
			Process process = PrepareProcess();
			process.StartInfo.Arguments = " d " + obfuscatedPassword;
			
			process.Start();
			string plainPassword = process.StandardOutput.ReadToEnd();
			process.WaitForExit();
			
			return plainPassword;
		}

		private Process PrepareProcess()
		{
			Process process = new Process();
			process.StartInfo.FileName = _exeFileFullName;
			process.StartInfo.UseShellExecute = false;
			process.StartInfo.RedirectStandardOutput = true;
			return process;
		}
	}
}
