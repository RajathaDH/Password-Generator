import argparse
import random

def get_charset(opts):
    charsLower = 'abcdefghijklmnopqrstuvwxyz'
    charsUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    # add numbers and symbols to charset if options passed in as arguments
    numbers = '0123456789' if opts.get('allow_numbers', False) else ''
    symbols = '!@#$&*-=' if opts.get('allow_symbols', False) else ''

    charset = charsLower + charsUpper + numbers + symbols

    return charset


def generate_password(length = 8, charset = ''):
    password = ''

    for _ in range(length):
        # get random character from charset and append to password
        password = password + charset[random.randrange(len(charset))]

    return password


def main():
    parser = argparse.ArgumentParser(description='generate a random password')

    parser.add_argument('-l', '--length', type=int, required=False, default=8)
    parser.add_argument('-n', '--numbers', action='store_true', help='allow numbers')
    parser.add_argument('-s', '--symbols', action='store_true', help='allow symbols')

    args = parser.parse_args()

    length = args.length
    opts = {
        'allow_numbers': args.numbers,
        'allow_symbols': args.symbols
    }

    charset = get_charset(opts)
    print(opts)

    password = generate_password(int(length), charset)

    print(password)


if __name__ == '__main__':
    main()