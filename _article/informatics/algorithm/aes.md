---
title: Advanced Encryption Standard (AES)
---
The Advanced Encryption Standard (AES), (original name Rijndael) is a specification for the encryption of electronic data established by the U.S. National Institute of Standards and Technology (NIST) in 2001.

AES operates on block sizes of $32 \times 32$ bits.

| Key-length | Number of Rounds |
|------------|------------------|
| 128 bit    | 10               |
| 192 bit    | 12               |
| 256 bit    | 14               |


## Algorithm

{% include figure.html width="25em" filename="aes-128.svg" description="AES 128 High Level Overview"%}


1. **Key Expansion:** Create individual 128bit round keys from the cipher key

1. **AddRoundKey:** each byte of the block is combined with a block of the round key using bitwise xor.

1. **Rounds:**
	1. SubBytes:  substitutes every byte of the state with an S-box entry
	1. ShiftRows: cyclically left shift every row
	1. MixColumns:  takes the four bytes of each column as input and outputs four new bytes, where each input byte affects all four output bytes. Each column is transformed by multiplication with a fixed $4 \times 4$ Matrix.
	1. AddRoundKey: XOR of the 128bit round key and the 128bit block.

1. **Final Round:** (no MixColumns)
	1. SubBytes
	1. ShiftRows
	1. AddRoundKey


<!--
### MixColumns
$$\vect{ b_{0,j} \\ b_{1,j} \\ b_{2,j} \\ b_{3,j} } = \mat{2&3&1&1 \\ 1&2&3&1 \\ 1&1&2&3 \\ 3&1&1&2} \cdot \vect{ a_{0,j} \\ a_{1,j} \\ a_{2,j} \\ a_{3,j} }$$ 
with the columns $j \in \{0,1,2,3\}$
-->



## Modes of Operation

{% tabbox %}

### ECB
**Electronic Codebook (ECB)**

The message is divided into blocks, and each block is encrypted separately.

{% include figure.html width="40em" filename="encmode_ecb.svg" %}
{% include figure.html width="40em" filename="decmode_ecb.svg" %}

### CBC
**Cipher Block Chaining (CBC)**

Each block of plaintext is XORed with the previous ciphertext block before being encrypted.

{% include figure.html width="40em" filename="encmode_cbc.svg" %}
{% include figure.html width="40em" filename="decmode_cbc.svg" %}


### CFB
**Cipher Feedback (CFB)**

A close relative of CBC. Transforms a block cipher into a self-synchronizing stream cipher.

{% include figure.html width="40em" filename="encmode_cfb.svg" %}

{% include figure.html width="40em" filename="decmode_cfb.svg" %}


### OFB
**Output Feedback (OFB)**

Transforms a block cipher into a synchronous stream cipher. It generates keystream blocks, which are then XORed with the plaintext blocks to get the ciphertext.

{% include figure.html width="40em" filename="encmode_ofb.svg" %}
{% include figure.html width="40em" filename="decmode_ofb.svg" %}


### CTR
**Counter (CTR)**

Counter mode turns a block cipher into a stream cipher. It generates the next keystream block by encrypting successive values of a "counter".

{% include figure.html width="40em" filename="encmode_ctr.svg" %}
{% include figure.html width="40em" filename="decmode_ctr.svg" %}


{% endtabbox %}


## Test Vectors

```
mode = ECB-AES128.Encrypt 
in   = 6bc1bee22e409f96e93d7e117393172a
key  = 2b7e151628aed2a6abf7158809cf4f3c
out  = 3ad77bb40d7a3660a89ecaf32466ef97 

mode = CBC-AES128.Encrypt 
in   = 6bc1bee22e409f96e93d7e117393172a
key  = 2b7e151628aed2a6abf7158809cf4f3c
iv   = 000102030405060708090a0b0c0d0e0f
out  = 7649abac8119b246cee98e9b12e9197d
```


## References
* [NIST FIPS 197: Advanced Encryption Standard](https://csrc.nist.gov/csrc/media/publications/fips/197/final/documents/fips-197.pdf)

* [NIST Special Publication 800-38A: AES Test Vectors](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf)

* [Wikipedia: Block Cipher Modes](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation)

