/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SMAOracle, SMAOracleInterface } from "../SMAOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_inputOracle",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_numPeriods",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_updateInterval",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_deployer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "MAX_PERIODS",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deployer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "wad",
        type: "int256",
      },
    ],
    name: "fromWad",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPriceAndMetadata",
    outputs: [
      {
        internalType: "int256",
        name: "_price",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numPeriods",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "periodCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poll",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "prices",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "scaler",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateInterval",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101206040523480156200001257600080fd5b5060405162000c0b38038062000c0b83398101604081905262000035916200027f565b6001600160a01b038416158015906200005657506001600160a01b03811615155b620000a85760405162461bcd60e51b815260206004820152601b60248201527f534d413a204e756c6c206164647265737320666f7262696464656e000000000060448201526064015b60405180910390fd5b600083118015620000ba575060188311155b620000fd5760405162461bcd60e51b8152602060048201526012602482015271534d413a204f7574206f6620626f756e647360701b60448201526064016200009f565b816200014c5760405162461bcd60e51b815260206004820181905260248201527f534d413a2055706461746520696e74657276616c2063616e6e6f74206265203060448201526064016200009f565b6000846001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156200018857600080fd5b505afa1580156200019d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001c39190620002ca565b9050601260ff821611156200021b5760405162461bcd60e51b815260206004820152601f60248201527f534d413a20446563696d616c20707265636973696f6e20746f6f20686967680060448201526064016200009f565b6200022881601262000400565b6200023590600a6200033f565b610100525060c09290925260e0526001600160601b0319606092831b8116608052911b1660a0526200043c565b80516001600160a01b03811681146200027a57600080fd5b919050565b600080600080608085870312156200029657600080fd5b620002a18562000262565b93506020850151925060408501519150620002bf6060860162000262565b905092959194509250565b600060208284031215620002dd57600080fd5b815160ff81168114620002ef57600080fd5b9392505050565b600181815b80851115620003375781600019048211156200031b576200031b62000426565b808516156200032957918102915b93841c9390800290620002fb565b509250929050565b6000620002ef60ff8416836000826200035b57506001620003fa565b816200036a57506000620003fa565b81600181146200038357600281146200038e57620003ae565b6001915050620003fa565b60ff841115620003a257620003a262000426565b50506001821b620003fa565b5060208310610133831016604e8410600b8410161715620003d3575081810a620003fa565b620003df8383620002f6565b8060001904821115620003f657620003f662000426565b0290505b92915050565b600060ff821660ff8416808210156200041d576200041d62000426565b90039392505050565b634e487b7160e01b600052601160045260246000fd5b60805160601c60a05160601c60c05160e0516101005161074c620004bf6000396000818161011b01528181610271015261050001526000818161024801526102af015260008181610221015281816103180152818161034101528181610475015261049e015260006101e401526000818161016301526103c2015261074c6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063a11752791161008c578063d5f3948811610066578063d5f39488146101df578063db6d8fcf14610206578063dcd654791461021c578063fd2c80ae1461024357600080fd5b8063a1175279146101ae578063bc31c1c1146101b6578063c0463711146101d657600080fd5b8063412ad1cc116100c8578063412ad1cc1461014b5780637dc0d1d01461015e5780637f1975191461019d57806398d5fdca146101a657600080fd5b80630a254640146100ef578063313ce5671461010e5780633c1e6ff514610116575b600080fd5b6100f7601881565b60405160ff90911681526020015b60405180910390f35b6100f7601281565b61013d7f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610105565b61013d610159366004610525565b61026a565b6101857f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610105565b61013d60015481565b61013d61029c565b61013d6102ab565b61013d6101c4366004610525565b60006020819052908152604090205481565b61013d60025481565b6101857f000000000000000000000000000000000000000000000000000000000000000081565b61020e6102f1565b604051610105929190610557565b61013d7f000000000000000000000000000000000000000000000000000000000000000081565b61013d7f000000000000000000000000000000000000000000000000000000000000000081565b60006102967f00000000000000000000000000000000000000000000000000000000000000008361060d565b92915050565b60006102a6610303565b905090565b60007f00000000000000000000000000000000000000000000000000000000000000006002546102db91906105f5565b42106102e9576102e96103be565b6102a6610303565b600060606102fd610303565b91509091565b6001546000908061031657600091505090565b7f000000000000000000000000000000000000000000000000000000000000000081111561036157507f00000000000000000000000000000000000000000000000000000000000000005b6000808260015461037291906106ce565b90505b6001548110156103ac5760008181526020819052604090205461039890836105b4565b9150806103a4816106e5565b915050610375565b506103b7828261060d565b9250505090565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166398d5fdca6040518163ffffffff1660e01b815260040160206040518083038186803b15801561041957600080fd5b505afa15801561042d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610451919061053e565b905061045c816104f9565b60018054600090815260208190526040902091909155547f0000000000000000000000000000000000000000000000000000000000000000116104dd576000807f00000000000000000000000000000000000000000000000000000000000000006001546104ca91906106ce565b8152602001908152602001600020600090555b600180549060006104ed836106e5565b90915550504260025550565b60006102967f000000000000000000000000000000000000000000000000000000000000000083610649565b60006020828403121561053757600080fd5b5035919050565b60006020828403121561055057600080fd5b5051919050565b82815260006020604081840152835180604085015260005b8181101561058b5785810183015185820160600152820161056f565b8181111561059d576000606083870101525b50601f01601f191692909201606001949350505050565b600080821280156001600160ff1b03849003851316156105d6576105d6610700565b600160ff1b83900384128116156105ef576105ef610700565b50500190565b6000821982111561060857610608610700565b500190565b60008261062a57634e487b7160e01b600052601260045260246000fd5b600160ff1b82146000198414161561064457610644610700565b500590565b60006001600160ff1b038184138284138082168684048611161561066f5761066f610700565b600160ff1b600087128281168783058912161561068e5761068e610700565b600087129250878205871284841616156106aa576106aa610700565b878505871281841616156106c0576106c0610700565b505050929093029392505050565b6000828210156106e0576106e0610700565b500390565b60006000198214156106f9576106f9610700565b5060010190565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220e84998dffe5ae1e0f662052ff5006c3ddb12a7bd97008d8783ededf385255bcc64736f6c63430008070033";

export class SMAOracle__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _inputOracle: string,
    _numPeriods: BigNumberish,
    _updateInterval: BigNumberish,
    _deployer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SMAOracle> {
    return super.deploy(
      _inputOracle,
      _numPeriods,
      _updateInterval,
      _deployer,
      overrides || {}
    ) as Promise<SMAOracle>;
  }
  getDeployTransaction(
    _inputOracle: string,
    _numPeriods: BigNumberish,
    _updateInterval: BigNumberish,
    _deployer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _inputOracle,
      _numPeriods,
      _updateInterval,
      _deployer,
      overrides || {}
    );
  }
  attach(address: string): SMAOracle {
    return super.attach(address) as SMAOracle;
  }
  connect(signer: Signer): SMAOracle__factory {
    return super.connect(signer) as SMAOracle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SMAOracleInterface {
    return new utils.Interface(_abi) as SMAOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SMAOracle {
    return new Contract(address, _abi, signerOrProvider) as SMAOracle;
  }
}