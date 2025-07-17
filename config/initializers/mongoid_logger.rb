# config/initializers/mongoid_logger.rb

if defined?(Mongoid)
  #
  
  Mongo::Logger.logger.level = Logger::WARN
  Mongo::Logger.logger = Logger.new(nil)
end
