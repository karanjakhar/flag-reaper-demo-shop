from flagsmith import Flagsmith

flagsmith = Flagsmith(environment_key="ser.xxx")


def place_order(user, cart):
    flags = flagsmith.get_identity_flags(user.id)

    if flags.is_feature_enabled("new_checkout"):
        order = fast_path_order(cart)
        audit("fast path")
    else:
        order = legacy_order(cart)

    if flags.is_feature_enabled("legacy_banner"):
        notify(user, "We moved!")
    else:
        notify(user, "Order placed")

    limit = flags.get_feature_value("max_upload_mb")
    return order, limit


def receipts(user):
    flags = flagsmith.get_identity_flags(user.id)
    if not flags.is_feature_enabled("legacy_banner"):
        return modern_receipts(user)
    return old_receipts(user)
