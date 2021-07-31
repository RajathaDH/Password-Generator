import argparse

def get_charset(opts):
    print(opts)

    return ''

def generate_password(length = 8, charset = ''):
    password = ''

    for _ in range(length):
        password = password + ''

    return password

def main():
    charset = get_charset({})

    password = generate_password(10, charset)

    print(password)


if __name__ == '__main__':
    main()