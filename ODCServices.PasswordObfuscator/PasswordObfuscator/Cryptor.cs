using System;
using System.Diagnostics;
using System.Security.Cryptography;

namespace ODCServices.PasswordObfuscator.PasswordObfuscator
{
	internal class Cryptor
	{
		private ICryptoTransform _encryptor;
		private ICryptoTransform _decryptor;

		private readonly byte[] _key = new byte[32]
		{
			17,102,40,46,85,181,96,109,76,63,38,192,144,63,74,74,251,115,35,112,165,188,190,183,189,235,196,109,192,29,238,188
		};

		public Cryptor()
		{
			SymmetricAlgorithm symmetricAlgorithm = new RijndaelManaged
			{
				BlockSize = 128,
				Mode = CipherMode.CBC,
				Padding = PaddingMode.PKCS7
			};
			byte[] array = new byte[symmetricAlgorithm.Key.Length];
			Array.Copy(_key, array, array.Length);
			symmetricAlgorithm.Key = array;
			byte[] array2 = new byte[symmetricAlgorithm.IV.Length];
			Array.Copy(_key, array2, array2.Length);
			symmetricAlgorithm.IV = array2;
			_encryptor = symmetricAlgorithm.CreateEncryptor();
			_decryptor = symmetricAlgorithm.CreateDecryptor();
		}

		public byte[] Encrypt(byte[] input)
		{
			lock (_encryptor)
			{
				return _encryptor.TransformFinalBlock(input, 0, input.Length);
			}
		}

		public byte[] Decrypt(byte[] input)
		{
			lock (_decryptor)
			{
				return _decryptor.TransformFinalBlock(input, 0, input.Length);
			}
		}
	}
}
