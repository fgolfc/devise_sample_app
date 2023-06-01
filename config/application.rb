require_relative "boot"
require 'rails_admin'

require "rails/all"
Bundler.require(*Rails.groups)

module Devisetest
  class Application < Rails::Application
    config.load_defaults 6.1
    config.enable_dependency_loading = true
    config.i18n.default_locale = :ja
  end
end
