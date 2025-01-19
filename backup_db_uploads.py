import time, os, datetime


SLEEP_SECS = 10  # 3600s = 1hr

_print = print


def print(*args):
    _print(*args, flush=True)


commands = [
    "zip -r backend-data.zip backend-data/",
    "docker compose exec mongo mongodump --username root --password example  --authenticationDatabase admin --db ecommerce --archive=./dump/ecommerce.dump",
    # "docker compose exec mongo mongorestore --username root --password example  --authenticationDatabase admin --nsInclude='ecommerce.*' --archive=./dump/ecommerce.dump", # restore
]

while True:
    print(datetime.datetime.now())
    for cmd in commands:
        print(cmd)
        if os.system(cmd) != 0:
            break

    print(f"sleeping for {SLEEP_SECS} secs! zzz")
    time.sleep(SLEEP_SECS)
